export default function productLayout({
  children,
  items,
  users,
}: {
  children: React.ReactNode;
  items: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-300 rounded-lg">{users}</div>
      <div className="bg-gray-500 rounded-2xl">{children}</div>
      <div className="bg-gray-300 rounded-lg">{items}</div>
    </>
  );
}
