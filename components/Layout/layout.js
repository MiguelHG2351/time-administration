import globalStyles from 'style/global'

export default function Layout({ children }) {
    return <>
    { children }
    <style jsx global>
        { globalStyles }
    </style>
</>
    
}