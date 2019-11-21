const TeamData = [
  {
    name: "Carl",
    dataSet: [10, 12, 6, 8, 0]
  },
  {
    name: "Tina",
    dataSet: [8, 4, 0, 10, 8]
  },
  {
    name: "Jo",
    dataSet: [0, 6, 8, 6, 12]
  },
];

const teamDataSet = [0, 0, 0, 0, 0];

TeamData.map(teamMember => {
  teamDataSet[0] += teamMember.dataSet[0];
  teamDataSet[1] += teamMember.dataSet[1];
  teamDataSet[2] += teamMember.dataSet[2];
  teamDataSet[3] += teamMember.dataSet[3];
  teamDataSet[4] += teamMember.dataSet[4];
  return teamDataSet;
});

const teamTotals = {
  name: "Team",
  dataSet: teamDataSet
}

TeamData.unshift(teamTotals);
console.log(teamTotals);



export default TeamData;
