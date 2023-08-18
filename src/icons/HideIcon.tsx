import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

const HideIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.40044 8.4116L3.05846 8.77146L2.40044 8.4116ZM15.5996 9.58844L16.2576 9.94831L16.2576 9.94831L15.5996 9.58844ZM15.5996 8.4117L16.2576 8.05184V8.05184L15.5996 8.4117ZM2.40043 9.58833L1.7424 9.94819L2.40043 9.58833ZM14.7736 6.09757C14.477 5.8084 14.0022 5.8144 13.713 6.11097C13.4238 6.40754 13.4298 6.88237 13.7264 7.17154L14.7736 6.09757ZM7.31128 12.5381C6.91005 12.4352 6.50138 12.6771 6.3985 13.0783C6.29562 13.4796 6.53749 13.8882 6.93872 13.9911L7.31128 12.5381ZM10.953 4.75587L11.1471 4.03143L10.953 4.75587ZM4.07929 11.6681L3.5884 12.2351H3.5884L4.07929 11.6681ZM5.30448 12.5317L4.93558 13.1847L5.73659 11.9187L5.30448 12.5317ZM15.1287 3.87896C15.4216 3.58607 15.4216 3.1112 15.1287 2.8183C14.8358 2.52541 14.3609 2.52541 14.068 2.8183L15.1287 3.87896ZM6 9.00002C6 9.41423 6.33579 9.75002 6.75 9.75002C7.16421 9.75002 7.5 9.41423 7.5 9.00002H6ZM9 7.50002C9.41421 7.50002 9.75 7.16423 9.75 6.75002C9.75 6.3358 9.41421 6.00002 9 6.00002V7.50002ZM3.05846 8.77146C4.20653 6.6722 6.43706 5.25002 8.99998 5.25002V3.75002C5.86798 3.75002 3.14347 5.48987 1.74241 8.05173L3.05846 8.77146ZM14.9415 9.22857C13.7935 11.3278 11.5629 12.75 9.00002 12.75V14.25C12.132 14.25 14.8565 12.5102 16.2576 9.94831L14.9415 9.22857ZM14.9415 8.77156C15.0195 8.91408 15.0195 9.08605 14.9415 9.22857L16.2576 9.94831C16.5808 9.35731 16.5808 8.64285 16.2576 8.05184L14.9415 8.77156ZM1.74241 8.05173C1.4192 8.64272 1.4192 9.35719 1.7424 9.94819L3.05846 9.22847C2.98051 9.08595 2.98051 8.91399 3.05846 8.77146L1.74241 8.05173ZM13.7264 7.17154C14.2069 7.64003 14.6175 8.17908 14.9415 8.77156L16.2576 8.05184C15.8614 7.3274 15.3598 6.66919 14.7736 6.09757L13.7264 7.17154ZM9.00002 12.75C8.41598 12.75 7.85028 12.6763 7.31128 12.5381L6.93872 13.9911C7.59844 14.1603 8.28928 14.25 9.00002 14.25V12.75ZM8.99998 5.25002C9.60939 5.25002 10.1989 5.33026 10.7589 5.48032L11.1471 4.03143C10.4616 3.84774 9.74164 3.75002 8.99998 3.75002V5.25002ZM4.57019 11.101C3.96095 10.5736 3.44732 9.93954 3.05846 9.22847L1.7424 9.94819C2.21783 10.8176 2.8451 11.5916 3.5884 12.2351L4.57019 11.101ZM5.67338 11.8787C5.27951 11.6562 4.91006 11.3953 4.57019 11.101L3.5884 12.2351C4.00319 12.5942 4.45429 12.9128 4.93558 13.1847L5.67338 11.8787ZM3.64719 12.2811L4.87238 13.1447L5.73659 11.9187L4.5114 11.0551L3.64719 12.2811ZM10.7589 5.48032C11.282 5.62049 11.7802 5.82178 12.2453 6.07616L12.9651 4.76012C12.3965 4.44919 11.7872 4.20294 11.1471 4.03143L10.7589 5.48032ZM3.87868 15.129L15.1287 3.87896L14.068 2.8183L2.81802 14.0683L3.87868 15.129ZM7.5 9.00002C7.5 8.17159 8.17157 7.50002 9 7.50002V6.00002C7.34315 6.00002 6 7.34316 6 9.00002H7.5Z"
        fill={theme.colors.text.black}
      />
    </svg>
  )
}

export { HideIcon }
