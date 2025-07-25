import { useSearchParams } from "react-router-dom";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  const [searchParams] = useSearchParams();

  const sortOptions = [
    {
      label: "مرتب سازی (جدید ترین)",
      value: "latest",
    },
    {
      label: "مرتب سازی (قدیمی ترین)",
      value: "earliest",
    },
  ];

  const statusOptions = [
    {
      label: "همه",
      value: "ALL",
    },
    {
      label: "باز",
      value: "OPEN",
    },
    {
      label: "بسته",
      value: "CLOSE",
    },
  ];

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی (همه)",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
