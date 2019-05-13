const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
  job: (root, { id }) => db.jobs.get(id), // args.id
  company: (root, { id }) => db.companies.get(id)
};

const Company = {
  jobs: company => db.jobs.list().filter(job => job.companyId === company.id)
};

const Job = {
  company: job => db.companies.get(job.companyId)
};

module.exports = { Query, Job, Company };
