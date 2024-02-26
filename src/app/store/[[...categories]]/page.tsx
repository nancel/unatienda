interface  CategoryProps {
    params: {
        categories: string[]
    }
    searchParams?: string
}

export default function Category(props: CategoryProps) {
    console.log(props.searchParams)

    const { categories } = props.params

    return (
        <h1>category: {categories}</h1>
    )
}