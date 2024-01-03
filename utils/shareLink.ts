type SharerLinkArgs = {
  platform: 'facebook' | 'linkedin' | 'twitter' | 'copy';
  url: string;
  title: string;
};

export const sharerLink = ({
  platform,
  url,
  title,
}: SharerLinkArgs): string => {
  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer.php?u=${url}`;
    case 'linkedin':
      return `http://www.linkedin.com/shareArticle?mini=true&url=${url}&source=${encodeURIComponent(
        'solivervmazo.github.io/solivermazo',
      )}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    case 'copy':
    default:
      return url;
  }
};
