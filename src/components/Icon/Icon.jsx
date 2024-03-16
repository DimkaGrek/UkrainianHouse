import { Svg } from './Svg';

export const Icon = ({ name, className, size }) => {
  switch (name) {
    case 'arrow-left':
      return (
        <Svg className={className} size={size}>
          <path d="M16 32l-16-16 16-16 3.733 3.733-12.267 12.267 12.267 12.267-3.733 3.733z"></path>
        </Svg>
      );
    case 'arrow-right':
      return (
        <Svg className={className} size={size}>
          <path d="M12.267 16l-12.267-12.267 3.733-3.733 16 16-16 16-3.733-3.733 12.267-12.267z"></path>
        </Svg>
      );
    case 'light-theme':
      return (
        <Svg className={className} size={size}>
          <path
            fill="#fff"
            style="fill: var(--color1, #fff)"
            d="M30.025 16c0 7.953-6.367 14.4-14.222 14.4s-14.222-6.447-14.222-14.4c0-7.953 6.367-14.4 14.222-14.4s14.222 6.447 14.222 14.4z"
          ></path>
          <path
            fill="#939393"
            style="fill: var(--color2, #939393)"
            d="M9.54 9.107c0.411-0.413 0.411-1.080 0.001-1.493l-0.401-0.404c-0.415-0.418-1.090-0.417-1.504 0.002-0.407 0.412-0.407 1.075 0 1.487l0.4 0.405c0.414 0.419 1.089 0.42 1.505 0.003zM7.375 15.465c0-0.589-0.478-1.067-1.067-1.067h-1.027c-0.589 0-1.067 0.477-1.067 1.067s0.478 1.067 1.067 1.067h1.027c0.589 0 1.067-0.478 1.067-1.067zM16.856 4.838c0-0.582-0.472-1.054-1.053-1.054s-1.053 0.472-1.053 1.054v1.040c0 0.582 0.472 1.054 1.053 1.054s1.053-0.472 1.053-1.053v-1.040zM23.971 8.698c0.407-0.412 0.407-1.074 0-1.485-0.414-0.419-1.090-0.419-1.504 0l-0.4 0.405c-0.407 0.412-0.407 1.074 0 1.485 0.414 0.419 1.090 0.419 1.504 0l0.4-0.405zM22.051 21.831c-0.404 0.409-0.405 1.067-0.002 1.477l0.41 0.417c0.412 0.42 1.088 0.421 1.502 0.002 0.406-0.411 0.405-1.073-0.002-1.483l-0.412-0.415c-0.412-0.415-1.084-0.414-1.495 0.002zM25.297 14.398c-0.589 0-1.067 0.477-1.067 1.067s0.477 1.067 1.067 1.067h1.027c0.589 0 1.067-0.478 1.067-1.067s-0.477-1.067-1.067-1.067h-1.027zM15.803 9.065c-3.487 0-6.321 2.869-6.321 6.4s2.834 6.4 6.321 6.4c3.487 0 6.321-2.869 6.321-6.4s-2.834-6.4-6.321-6.4zM14.749 26.091c0 0.582 0.472 1.053 1.053 1.053s1.053-0.472 1.053-1.053v-1.040c0-0.582-0.472-1.053-1.053-1.053s-1.053 0.472-1.053 1.053v1.040zM7.63 22.231c-0.405 0.412-0.404 1.072 0.002 1.483 0.415 0.42 1.093 0.419 1.506-0.002l0.405-0.412c0.405-0.412 0.404-1.072-0.002-1.483-0.415-0.42-1.092-0.419-1.506 0.002l-0.405 0.412z"
          ></path>
        </Svg>
      );
    case 'dark-theme':
      return (
        <Svg className={className} size={size}>
          <path
            fill="#333"
            style="fill: var(--color3, #333)"
            d="M27.527 16c0 6.927-5.546 12.542-12.387 12.542s-12.387-5.615-12.387-12.542c0-6.927 5.546-12.542 12.387-12.542s12.387 5.615 12.387 12.542z"
          ></path>
          <path
            fill="#fff"
            style="fill: var(--color1, #fff)"
            d="M15.148 15.995c-1.638-2.872-1.289-6.348 0.609-8.799 0.542-0.703-0.179-1.708-1.023-1.44-0.984 0.318-1.941 0.813-2.83 1.504-3.309 2.578-4.475 7.24-2.775 11.095 2.265 5.123 8.318 7.024 12.99 4.293 0.58-0.339 1.1-0.729 1.579-1.17 0.659-0.61 0.172-1.742-0.713-1.622-3.151 0.458-6.259-1.072-7.838-3.861z"
          ></path>
        </Svg>
      );
    case 'adress':
      return (
        <Svg className={className} size={size}>
          <path d="M12.19 15.2c-1.155 0-2.262-0.421-3.079-1.172s-1.275-1.768-1.275-2.828c0-1.061 0.459-2.078 1.275-2.828s1.924-1.172 3.079-1.172c1.155 0 2.262 0.421 3.079 1.172s1.275 1.768 1.275 2.828c0 0.525-0.113 1.045-0.331 1.531s-0.54 0.926-0.944 1.298-0.884 0.666-1.412 0.867c-0.528 0.201-1.094 0.304-1.666 0.304zM12.19 0c-3.233 0-6.334 1.18-8.62 3.28s-3.571 4.949-3.571 7.92c0 8.4 12.19 20.8 12.19 20.8s12.19-12.4 12.19-20.8c0-2.97-1.284-5.819-3.57-7.92s-5.387-3.28-8.62-3.28z"></path>
        </Svg>
      );
    case 'mail':
      return (
        <Svg className={className} size={size}>
          <path d="M36 8l-16 10-16-10v-4l16 10 16-10zM36 0h-32c-2.22 0-4 1.78-4 4v24c0 1.061 0.421 2.078 1.172 2.828s1.768 1.172 2.828 1.172h32c1.061 0 2.078-0.421 2.828-1.172s1.172-1.768 1.172-2.828v-24c0-1.061-0.421-2.078-1.172-2.828s-1.768-1.172-2.828-1.172z"></path>
        </Svg>
      );
    case 'search':
      return (
        <Svg className={className} size={size}>
          <path d="M29.511 32l-11.2-11.2c-0.889 0.711-1.911 1.274-3.067 1.689s-2.385 0.622-3.689 0.622c-3.23 0-5.963-1.119-8.2-3.356s-3.356-4.97-3.356-8.2 1.119-5.963 3.356-8.2c2.237-2.237 4.97-3.356 8.2-3.356s5.963 1.119 8.2 3.356c2.237 2.237 3.356 4.97 3.356 8.2 0 1.304-0.207 2.533-0.622 3.689s-0.978 2.178-1.689 3.067l11.2 11.2-2.489 2.489zM11.556 19.556c2.222 0 4.111-0.778 5.667-2.333s2.333-3.444 2.333-5.667c0-2.222-0.778-4.111-2.333-5.667s-3.444-2.333-5.667-2.333c-2.222 0-4.111 0.778-5.667 2.333s-2.333 3.444-2.333 5.667c0 2.222 0.778 4.111 2.333 5.667s3.444 2.333 5.667 2.333z"></path>
        </Svg>
      );
    case 'close':
      return (
        <Svg className={className} size={size}>
          <path d="M3.2 32l-3.2-3.2 12.8-12.8-12.8-12.8 3.2-3.2 12.8 12.8 12.8-12.8 3.2 3.2-12.8 12.8 12.8 12.8-3.2 3.2-12.8-12.8-12.8 12.8z"></path>
        </Svg>
      );
    case 'edit':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M22.667 4c0.35-0.35 0.766-0.628 1.224-0.817s0.948-0.287 1.443-0.287c0.495 0 0.986 0.098 1.443 0.287s0.873 0.467 1.223 0.817 0.628 0.766 0.818 1.223c0.189 0.458 0.287 0.948 0.287 1.443s-0.098 0.986-0.287 1.443c-0.19 0.458-0.467 0.873-0.818 1.223l-18 18-7.333 2 2-7.333 18-18z"
          ></path>
        </Svg>
      );
    case 'delete':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M4 8h24"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M25.333 8v18.667c0 0.707-0.281 1.385-0.781 1.886s-1.178 0.781-1.886 0.781h-13.333c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886v-18.667M10.667 8v-2.667c0-0.707 0.281-1.386 0.781-1.886s1.178-0.781 1.886-0.781h5.333c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886v2.667"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M13.333 14.667v8"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M18.667 14.667v8"
          ></path>
        </Svg>
      );
    case 'fb':
      return (
        <Svg className={className} size={size}>
          <path d="M31.816 16.407c0-8.549-6.921-15.487-15.448-15.487s-15.448 6.938-15.448 15.487c0 7.496 5.314 13.737 12.359 15.177v-10.531h-3.090v-4.646h3.090v-3.872c0-2.989 2.425-5.42 5.407-5.42h3.862v4.646h-3.090c-0.85 0-1.545 0.697-1.545 1.549v3.097h4.634v4.646h-4.634v10.763c7.801-0.774 13.903-7.372 13.903-15.41z"></path>
        </Svg>
      );
    case 'github':
      return (
        <Svg className={className} size={size}>
          <path d="M15.998 0c-8.833 0-15.998 7.345-15.998 16.405 0 7.248 4.585 13.397 10.943 15.565 0.8 0.152 1.091-0.355 1.091-0.79 0-0.388-0.013-1.42-0.020-2.789-4.451 0.99-5.391-2.2-5.391-2.2-0.727-1.894-1.776-2.401-1.776-2.401-1.453-1.016 0.109-0.996 0.109-0.996 1.607 0.116 2.451 1.691 2.451 1.691 1.427 2.506 3.745 1.782 4.657 1.363 0.146-1.059 0.559-1.782 1.015-2.192-3.552-0.415-7.287-1.822-7.287-8.108 0-1.79 0.623-3.256 1.647-4.402-0.166-0.415-0.714-2.083 0.157-4.34 0 0 1.343-0.443 4.4 1.681 1.305-0.364 2.652-0.55 4.004-0.552 1.353 0.001 2.7 0.187 4.006 0.552 3.055-2.124 4.396-1.682 4.396-1.682 0.873 2.258 0.324 3.927 0.16 4.341 1.025 1.147 1.644 2.611 1.644 4.402 0 6.303-3.741 7.689-7.305 8.095 0.575 0.507 1.087 1.506 1.087 3.038 0 2.192-0.020 3.962-0.020 4.499 0 0.44 0.29 0.95 1.1 0.79 6.354-2.174 10.934-8.319 10.934-15.565 0-9.060-7.165-16.405-16.002-16.405z"></path>
        </Svg>
      );
    case 'insta':
      return (
        <Svg className={className} size={size}>
          <path d="M21 16c0 1.326-0.527 2.598-1.464 3.536s-2.209 1.464-3.536 1.464c-1.326 0-2.598-0.527-3.536-1.464s-1.464-2.209-1.464-3.536c0-0.285 0.030-0.563 0.082-0.833h-1.748v6.662c0 0.463 0.375 0.838 0.838 0.838h11.658c0.222-0 0.435-0.089 0.592-0.246s0.245-0.37 0.245-0.592v-6.662h-1.748c0.052 0.27 0.082 0.548 0.082 0.833zM16 19.333c0.438-0 0.871-0.087 1.276-0.254s0.772-0.413 1.081-0.723c0.309-0.31 0.555-0.677 0.723-1.082s0.254-0.838 0.253-1.276c-0-0.438-0.087-0.871-0.254-1.276s-0.413-0.772-0.723-1.082c-0.31-0.309-0.677-0.555-1.082-0.722s-0.838-0.254-1.276-0.254c-0.884 0-1.732 0.352-2.357 0.977s-0.976 1.474-0.976 2.358 0.352 1.732 0.977 2.357c0.625 0.625 1.474 0.976 2.358 0.976zM20 12.5h1.998c0.133 0 0.26-0.053 0.354-0.146s0.147-0.221 0.148-0.354v-1.998c0-0.133-0.053-0.261-0.147-0.355s-0.222-0.147-0.355-0.147h-1.998c-0.133 0-0.261 0.053-0.355 0.147s-0.147 0.222-0.147 0.355v1.998c0.002 0.275 0.227 0.5 0.502 0.5zM16 0c-4.243 0-8.313 1.686-11.314 4.686s-4.686 7.070-4.686 11.314c0 4.243 1.686 8.313 4.686 11.314s7.070 4.686 11.314 4.686c2.101 0 4.182-0.414 6.123-1.218s3.705-1.983 5.191-3.468 2.664-3.25 3.468-5.191c0.804-1.941 1.218-4.022 1.218-6.123s-0.414-4.182-1.218-6.123c-0.804-1.941-1.983-3.705-3.468-5.191s-3.25-2.664-5.191-3.468c-1.941-0.804-4.022-1.218-6.123-1.218zM24.333 22.482c0 1.018-0.833 1.852-1.852 1.852h-12.963c-1.018 0-1.852-0.833-1.852-1.852v-12.963c0-1.018 0.833-1.852 1.852-1.852h12.963c1.018 0 1.852 0.833 1.852 1.852v12.963z"></path>
        </Svg>
      );
    case 'linkedin':
      return (
        <Svg className={className} size={size}>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM12.083 22.632h-3.24v-10.427h3.24v10.427zM10.443 10.925c-1.023 0-1.685-0.725-1.685-1.622 0-0.915 0.682-1.618 1.727-1.618s1.685 0.703 1.705 1.618c0 0.897-0.66 1.622-1.747 1.622zM23.917 22.632h-3.24v-5.778c0-1.345-0.47-2.258-1.642-2.258-0.895 0-1.427 0.618-1.662 1.213-0.087 0.212-0.108 0.512-0.108 0.81v6.012h-3.242v-7.1c0-1.302-0.042-2.39-0.085-3.327h2.815l0.148 1.448h0.065c0.427-0.68 1.472-1.683 3.22-1.683 2.132 0 3.73 1.428 3.73 4.498v6.165z"></path>
        </Svg>
      );
    default:
      return (
        <Svg className={className} size={size}>
          <path d="M1.448 9.965c5.878-6.123 15.884-2.295 18.183 0.772 8.136-21.418 15.589-4.338 15.962 0.649s-10.628 20.103-10.628 20.103c-10.584-4.828-29.395-15.401-23.517-21.525z"></path>
        </Svg>
      );
  }
};
