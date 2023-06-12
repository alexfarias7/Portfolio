type CMSIconProps = {
  icon: string;
};

const CmsIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

export default CmsIcon;
