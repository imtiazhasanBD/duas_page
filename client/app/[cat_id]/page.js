const page = async ({ searchParams }) => {
    const { cat } = await searchParams;

    
  return (
    <div>category: {cat}</div>
  )
}

export default page