type Props = {
  selected: boolean
}

function ZoomIcon({ selected }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      {selected ? (
        <>
          <path
            d="M1.5 14.4545V7.54545C1.5 6.99317 1.94772 6.54545 2.5 6.54545H13.9C15.5569 6.54545 16.9 7.8886 16.9 9.54545V16.4545C16.9 17.0068 16.4523 17.4545 15.9 17.4545H4.5C2.84315 17.4545 1.5 16.1114 1.5 14.4545Z"
            fill="#7C2F70"
          />
          <path
            d="M18.55 9.81818L21.8892 7.24246C22.5467 6.73535 23.5 7.20399 23.5 8.03428V15.9657C23.5 16.796 22.5467 17.2646 21.8892 16.7575L18.55 14.1818V9.81818Z"
            fill="#7C2F70"
          />
        </>
      ) : (
        <path
          d="M18.55 9.81818L18.2446 9.42228L18.05 9.57239V9.81818H18.55ZM18.55 14.1818H18.05V14.4276L18.2446 14.5777L18.55 14.1818ZM21.8892 16.7575L21.5839 17.1534L21.8892 16.7575ZM21.8892 7.24246L21.5839 6.84656L21.8892 7.24246ZM1 7.54545V14.4545H2V7.54545H1ZM4.5 17.9545H15.9V16.9545H4.5V17.9545ZM17.4 16.4545V9.54545H16.4V16.4545H17.4ZM13.9 6.04545H2.5V7.04545H13.9V6.04545ZM21.5839 6.84656L18.2446 9.42228L18.8554 10.2141L22.1946 7.63837L21.5839 6.84656ZM18.05 9.81818V14.1818H19.05V9.81818H18.05ZM18.2446 14.5777L21.5839 17.1534L22.1946 16.3616L18.8554 13.7859L18.2446 14.5777ZM24 15.9657V8.03428H23V15.9657H24ZM21.5839 17.1534C22.57 17.9141 24 17.2112 24 15.9657H23C23 16.3809 22.5233 16.6152 22.1946 16.3616L21.5839 17.1534ZM22.1946 7.63837C22.5233 7.38481 23 7.61913 23 8.03428H24C24 6.78884 22.57 6.08589 21.5839 6.84656L22.1946 7.63837ZM17.4 9.54545C17.4 7.61246 15.833 6.04545 13.9 6.04545V7.04545C15.2807 7.04545 16.4 8.16474 16.4 9.54545H17.4ZM15.9 17.9545C16.7284 17.9545 17.4 17.283 17.4 16.4545H16.4C16.4 16.7307 16.1761 16.9545 15.9 16.9545V17.9545ZM1 14.4545C1 16.3875 2.567 17.9545 4.5 17.9545V16.9545C3.11929 16.9545 2 15.8353 2 14.4545H1ZM2 7.54545C2 7.26931 2.22386 7.04545 2.5 7.04545V6.04545C1.67157 6.04545 1 6.71703 1 7.54545H2Z"
          fill="#B5B5B5"
        />
      )}
    </svg>
  )
}

export default ZoomIcon