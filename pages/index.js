import Logo from "../components/Logo";

export default function Home({ data }) {
  return (
    <div>
        <Logo />
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/hello/`)
    const data = await res.json()

    return { props: { data } }
}