const events = [
    {
        id = 1,
        ownerID: "id",
        name: "Alex",
        date: "1/5/2021", 
        eventTime: "10:25",
        location: "CMC", 
        tags: ["CMC", "EconDepartment"]
    },
    {
        id = 2,
        ownerID: "id",
        name: "Ben",
        date: "10/5/2021", 
        eventTime: "8:25",
        location: "HMC", 
        tags: ["HMC", "CSDepartment"]
    },
    {
        id = 3,
        ownerID: "id",
        name: "Claudia",
        date: "9/23/2021", 
        eventTime: "10:25",
        location: "Scrips", 
        tags: ["Scripts", "Orchestra"]
    },
    {
        id = 4,
        ownerID: "id",
        name: "Diana",
        date: "8/32/2021", 
        eventTime: "10:25",
        location: "Pomona", 
        tags: ["Pomona", "EconDepartment"]
    }
];

function useEvents(event) {
    return [
        event.name,
        function(){
            console.log(event.location);
        }
    ];
}
export default events;