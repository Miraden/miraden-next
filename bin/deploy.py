#!/bin/env python3
import subprocess
import time
import tarfile

host="miraden_front_root"
hostIp="miraden.com"
release=str(time.localtime().tm_year) + str(time.localtime().tm_mon) + str(time.localtime().tm_mday) + str(time.localtime().tm_hour) + str(time.localtime().tm_min) + str(time.localtime().tm_sec)
tarFile=release + ".tar.gz"
hostFolder="/tmp/deploy"
destPath="~/www/releases"
envPath="~/.env"
EXCLUDE_TAR_FILES = ['.vscode', '.next', '.git', '.yarn', 'node_modules']

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


def findProjectDir():
    result = command('git rev-parse --show-toplevel')
    if result is False:
        return None
    else:
        return result.decode("utf-8").replace("\n", "")

def command(cmd):
    result = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = result.communicate()
    if result.returncode != 0:
        return False
    else:
        return output

def ssh_command(cmd):
    ssh = subprocess.Popen("ssh {host} '{cmd}'".format(host=host,cmd=cmd), shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = ssh.communicate()
    if ssh.returncode != 0:
        return False
    else:
        return output

def copyFiles():
    root = findProjectDir()
    if root is None: return
    print("Copy files...", end=" ", flush=True)
    packageJson = root + "/package.json"
    result = command("scp {packageJson} {host}:{hostFolder}".format(hostFolder=hostFolder, host=host, packageJson=packageJson))
    if result is False:
        print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
    else:
        print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

def tarFiles():
    print("Archivate...", end=" ", flush=True)
    dir = findProjectDir()
    with tarfile.open(tarFile, "w:gz") as tar:
        tar.add(dir, arcname=tarFile)
    print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

def makeDir():
    print("Make dir...", end=" ", flush=True)
    result = ssh_command("mkdir -p {hostFolder}".format(hostFolder=hostFolder))
    if result is False:
        print(bcolors.FAIL + "[FAILED]" + bcolors.ENDC)
    else:
        print(bcolors.OKGREEN + "[OK]" + bcolors.ENDC)

if __name__ == '__main__':
    tarFiles()
