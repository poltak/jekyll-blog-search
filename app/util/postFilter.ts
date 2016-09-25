export interface PostType {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  category: string;
  tags: string;
};

/**
 * Function to be used as a filter callback to filter out posts that do not have text
 * matching the given value.
 * @param value   A value to use to search on the post's params.
 */
export default (value: string) => ({ title, subtitle, date, category, tags }: PostType) => {
  const doesMatch = (a: string, b: string): boolean => a.toLowerCase().indexOf(b.toLowerCase()) !== -1;

  const doesMatchArr = (arr: string[], val: string): boolean => arr
    .map(str => doesMatch(str, val))
    .reduce((prev, curr) => prev || curr);

  return doesMatch(title, value) || doesMatch(subtitle, value) || doesMatch(date, value) ||
    doesMatch(category, value) || doesMatchArr(tags, value);
};
