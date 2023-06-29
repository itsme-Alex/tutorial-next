import styles
    from '@/styles/dashboard/page.module.scss';
import CurrentWeather
    from "@/components/dashboard/currentWeather";
import Card
    from "@/components/dashboard/card";

export default function Page() {
    return (
        <div
            className={styles.page}>
            <div
                className={styles.pageHeader}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.mainContainer}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
}
