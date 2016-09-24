export interface PostType { title: string; subtitle: string; date: string; link: string; };

/**
 * Function to be used as a filter callback to filter out posts that do not have text
 * matching the given value.
 * @param value   A value to use to search on the post's params.
 */
export default (value: string) => ({ title, subtitle, date }: PostType) => {
  const val = value.toLowerCase();

  const titleMatch = title.toLowerCase().indexOf(val) !== -1;
  const subtitleMatch = subtitle.toLowerCase().indexOf(val) !== -1;
  const dateMatch = date.toLowerCase().indexOf(val) !== -1;

  return titleMatch || subtitleMatch || dateMatch;
};
