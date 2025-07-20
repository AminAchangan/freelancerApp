import React from "react";
import Empty from "../../ui/Empty";
import ProposalRow from "./ProposalRow";
import Table from "../../ui/Table";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
