import Sidebar from "@/components/dashboard/sidebar";
import styles from '@/styles/dashboard/layout.scss';

export default function DashboardLayout({ children }) {
    return (
        <div style={{display: "flex", flexDirection:"row"}}>
            <Sidebar/>
            {children}
        </div>
    );
}


