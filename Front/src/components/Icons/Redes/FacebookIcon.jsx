//FacebookIcon 

const FacebookIcon = ({fill="currentColor",className="w-5 h-5", ...props}) =>{
    return(
        <svg
    {...props}

        fill={fill}
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        className={className}
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    )
}

export default FacebookIcon