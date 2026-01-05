import { useEffect } from 'react';

interface AdSenseProps {
  client: string;
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: string;
  layout?: string;
}

const AdSenseComponent: React.FC<AdSenseProps> = ({
  client,
  slot,
  style,
  format = 'auto',
  responsive = 'true',
  layout
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      {...(layout && { 'data-ad-layout': layout })}
    />
  );
};

export default AdSenseComponent;