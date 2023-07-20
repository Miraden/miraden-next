#!/bin/env python3
import subprocess
import time

host="miraden_front"
release=str(time.localtime().tm_year) + str(time.localtime().tm_mon) + str(time.localtime().tm_mday) + str(time.localtime().tm_hour) + str(time.localtime().tm_min) + str(time.localtime().tm_sec)
tarFile=release + ".tar.gz"
hostFolder="/tmp/deploy"
destPath="~/www/releases"
envPath="~/.env"

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'

    def disable(self):
        self.HEADER = ''
        self.OKBLUE = ''
        self.OKGREEN = ''
        self.WARNING = ''
        self.FAIL = ''
        self.ENDC = ''

class onServer:
    def __init__(self):
        self.currentRelease = "~/www/current"
        self.releasePath = "~/www/releases/" + release
        self.tmpDir = "/tmp/deploy/"
        self.envFile = "~/www/env/.env"
        print(bcolors.OKBLUE + "[Remote]" + bcolors.ENDC)
        self.stopInstance()
        self.makeTmpDir()
        self.makeReleaseDir()
        self.untar()
        self.setupEnv()
        self.installDep()
        self.buildNext()
        self.activateRelease()
        self.clearTmpDir()
        self.restartInstance()

    def command(self, cmd):
        ssh = subprocess.Popen("ssh {host} '{cmd}'".format(host=host,cmd=cmd), shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
        output, error = ssh.communicate()
        if ssh.returncode != 0:
            return False
        else:
            return output

    def makeTmpDir(self):
        print("Make tmp dir...", end=" ", flush=True)
        result = self.command("mkdir -p {folder}".format(folder=self.tmpDir))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def makeReleaseDir(self):
        print("Make release dir...", end=" ", flush=True)
        result = self.command("mkdir -p {folder}".format(folder=self.releasePath))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def untar(self):
        print("Untar release...", end=" ", flush=True)
        src = self.tmpDir + tarFile
        self.command("tar -xf {arc} -C {dir}".format(arc=src, dir=self.releasePath))
        print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def installDep(self):
        print("Installing dependencies...", end=" ", flush=True)
        result = self.command("cd {dest} && yarn install".format(dest=self.releasePath))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def buildNext(self):
        print("Building next...", end=" ", flush=True)
        result = self.command("cd {dest} && yarn build".format(dest=self.releasePath))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def clearTmpDir(self):
        print("Clear tmp dir...", end=" ", flush=True)
        result = self.command("rm -rf {folder}/*".format(folder=self.tmpDir))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def activateRelease(self):
        print("Activating release...", end=" ", flush=True)
        release = self.releasePath
        result = self.command("ln -sfn {release} {current}".format(release=release, current=self.currentRelease))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def setupEnv(self):
        print("Setup environment...", end=" ", flush=True)
        result = self.command("cp {envFile} {releaseDir}".format(envFile=self.envFile, releaseDir=self.releasePath))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def restartInstance(self):
        print("Restarting instance ...", end=" ", flush=True)
        result = self.command("sudo supervisorctl restart nextjs:*")
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def stopInstance(self):
        print("Stopping running instance...", end=" ", flush=True)
        result = self.command("sudo supervisorctl stop nextjs:*")
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

class onHost:
    def __init__(self):
        self.tmpDir = "/tmp/deploy/"
        print(bcolors.OKBLUE + "[Local]" + bcolors.ENDC)
        self.makeTmpDir()
        self.archive()
        self.copyToServer()

    def findRoot(self):
        result = self.command('git rev-parse --show-toplevel')
        if result is False:
            return None
        else:
            return result.decode("utf-8").replace("\n", "")

    def command(self, cmd):
        result = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
        output, error = result.communicate()
        if result.returncode != 0:
            return False
        else:
            return output

    def copyToServer(self):
        print("Copying files...", end=" ", flush=True)
        tar = self.tmpDir + tarFile
        print(tar + bcolors.ENDC)
        result = self.command("scp {tar} {host}:{hostFolder}".format(hostFolder=self.tmpDir, host=host, tar=tar))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def archive(self):
        print("Archivate...", end=" ", flush=True)
        dir = self.findRoot()
        dest = hostFolder + "/" + tarFile
        self.command("mkdir -p {path}".format(path=hostFolder))
        self.command("tar --exclude=./node_modules --exclude=./.next --exclude=./.yarn --exclude=./.vscode --exclude=./.git --exclude=./.github --exclude=./bin --exclude=./.idea --exclude=./.gitignore --exclude=./.editorconfig --exclude=./.env.local --exclude=./.eslintrc.json --exclude=./.env -czf {tarFile} .".format(tarFile=dest, dir=hostFolder))
        print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def makeTmpDir(self):
        print("Make tmp dir...", end=" ", flush=True)
        result = self.command("mkdir -p {folder}".format(folder=self.tmpDir))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

    def clearTmpDir(self):
        print("Clear tmp dir...", end=" ", flush=True)
        result = self.command("rm -rf {folder}".format(folder=self.tmpDir))
        if result is False:
            print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
        else:
            print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)


if __name__ == '__main__':
    onHost()
    onServer()
