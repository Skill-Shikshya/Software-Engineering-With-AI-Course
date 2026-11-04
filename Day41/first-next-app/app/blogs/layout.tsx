export default function RootLayout({ children }: LayoutProps<"/">) {
  return <div className="bg-red-500 h-screen"> {children}</div>;
}
