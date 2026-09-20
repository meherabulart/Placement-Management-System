import React from "react";
import PageHeader from "../../components/common/PageHeader";
import StatusBadge from "../../components/common/StatusBadge";

export default function RecruiterOffers() {
  const offers = [["Zayed Hossain", "Graduate Software Engineer", "₹9 LPA", "Pending"], ["Aarav Sen", "Software Developer", "₹10 LPA", "Accepted"], ["Maya Roy", "Frontend Developer", "₹8 LPA", "Pending"]];
  return <><PageHeader title="Offers" subtitle="Manage offers sent to selected candidates." action={<button className="button button-primary">Create Offer</button>} /><section className="panel"><div className="table-wrap"><table><thead><tr><th>Candidate</th><th>Role</th><th>Package</th><th>Status</th><th>Action</th></tr></thead><tbody>{offers.map(([name, role, pkg, status]) => <tr key={name}><td><strong>{name}</strong></td><td>{role}</td><td>{pkg}</td><td><StatusBadge status={status}/></td><td><button className="text-button">View offer</button></td></tr>)}</tbody></table></div></section></>;
}
