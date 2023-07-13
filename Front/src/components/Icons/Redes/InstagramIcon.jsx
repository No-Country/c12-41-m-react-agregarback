const InstagramIcon = ({fill="none", className="w-5 h-5", ...props}) => {
    return(
        <svg
        {...props}
                  fill={fill}
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWEidth="2"
                  className={className}
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
    )
} 

export default InstagramIcon