import Head from './head'
import './index.scss'

const Sidebar = (props: Record<string, any>) => {
     return(
       <aside className="sidebar">
           <Head />
       </aside>
     )
}

export default Sidebar