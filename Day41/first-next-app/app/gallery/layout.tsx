type galleryLayout = {
  children: React.ReactNode;
  model: React.ReactNode;
};
function layout({ children, model }: galleryLayout) {
  return (
    <>
      {children}
      {model}
    </>
  );
}

export default layout;
