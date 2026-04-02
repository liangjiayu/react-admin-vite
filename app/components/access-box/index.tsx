type AccessBoxProps = {
  accessible: boolean;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
};

const AccessBox: React.FC<AccessBoxProps> = ({
  accessible,
  fallback,
  children,
}) => {
  if (!accessible) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default AccessBox;
