const LinkedinIcon = ({
  fill = "currentColor",
  className = "w-5 h-5",
  ...props
}) => {
  return (
    <svg
    {...props}
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      stroke-linejoin="round"
      strokeWEidth="0"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        stroke="none"
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      ></path>
      <circle cx="4" cy="4" r="2" stroke="none"></circle>
    </svg>
  );
};
export default LinkedinIcon