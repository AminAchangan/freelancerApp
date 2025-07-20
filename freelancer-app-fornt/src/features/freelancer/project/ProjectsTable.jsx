import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import useProjects from "../../../hooks/useProjects";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  console.log("📊 پروژه‌ها:", projects);

  if (isLoading) return <Loading />;

  if (!projects || projects.length === 0) return <Empty resourceName="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project._id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
