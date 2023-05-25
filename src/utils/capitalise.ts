export default function capitalise(str: string): string {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
