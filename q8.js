const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
//copy and merge
const merged = Object.assign({}, name, details);
console.log(merged.firstName+" "+merged.lastName +" "+merged.job +" "+merged.employer);
