import BarChart from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de vendas para clientes visitados(%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas(%)</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <div className="text-primary"><h2>Todas as vendas</h2></div>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Home;
