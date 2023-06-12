import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

const RichText = ({ ...props }: RichTextProps) => {
  return <CMSRichText {...props} />;
};

export default RichText;
