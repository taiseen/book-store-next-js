import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Buy or Rent Books",
  description: "An Online Bookstore to Sell and Rent Used Books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row min-h-screen">
      <Sidebar />

      <div className="flex flex-wrap p-2 justify-center items-center grow gap-2">{children}</div>
    </div>
  );
}
