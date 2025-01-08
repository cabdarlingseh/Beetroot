/*Part 4: Classroom Management (Advanced Challenge)

Create the Array:
Name it classrooms.
Each object has:
name (string)
seats (number, 10-20)
faculty (string)
Functions:
displayClassrooms(), displayClassroomsByFaculty(rooms):
Self-explanatory
findSuitableClassrooms(group):
Takes a group object (with name, students, faculty).
Returns classrooms that can fit the group and are for the right faculty.
sortBySeats(), sortByName():
Sort the classrooms array accordingly. */

const classrooms = [{
        room: 'Room C',
        seats: 13,
        faculty: 'Arts'
    },
    {
        room: 'Room A',
        seats: 17,
        faculty: 'Science'
    },
    {
        room: 'Room E',
        seats: 20,
        faculty: 'Economics'
    },
    {
        room: 'Room B',
        seats: 10,
        faculty: 'Geology'
    },
    {
        room: 'Room D',
        seats: 18,
        faculty: 'Engineering'
    }
];

function displayClassrooms() {
    console.log('All Classrooms: ');

    classrooms.forEach((classrooms) => {
        console.log(`Name: ${classrooms.room}, Seats: ${classrooms.seats}, Faculty: ${classrooms.faculty}`);
    });
};

function displayClassroomsByFaculty(rooms) {
    const filteringFaculty = classrooms.filter((facultyName) => {
        return facultyName.faculty === rooms;
    });
    console.log('---------------------------------------------------------------')
    if (filteringFaculty.length === 0) {
        console.log(`The faculty does not exist.`);
    } else {
        filteringFaculty.forEach((faculty) => {
            console.log(`Name: ${faculty.room}, Seats: ${faculty.seats}, Faculty: ${faculty.faculty}`);
        });
    };
};

function findSuitableClassrooms(group) {
    const suitableGroup = classrooms.filter((groupName) => {
        return groupName.seats >= group.students && groupName.faculty === group.faculty;
    });
    console.log('------------------------------------------')
    if (suitableGroup.length === 0) {
        console.log('There are no suitable classroom for this group.');
    } else {
        console.log('Suitable Classroom:')
        suitableGroup.forEach((group) => {
            console.log(`Name: ${group.room}, Seats: ${group.seats}, Faculty: ${group.faculty}`);
        });
    };
};


function sortBySeats() {
    const sortingSeats = classrooms.sort((a, b) => {
        return a.seats - b.seats
    })
    console.log('Sorting by Seats');
    sortingSeats.forEach((group) => {

        console.log(`Name: ${group.room}, Seats: ${group.seats}, Faculty: ${group.faculty}`);

    });
    console.log('----------------------------------------------------------------------------')
};


function sortByName() {
    const sortingName = classrooms.sort((a, b) => {
        return a.room.localeCompare(b.room);
    })
    console.log('Sorting By Name');
    sortingName.forEach((group) => {

        console.log(`Name: ${group.room}, Seats: ${group.seats}, Faculty: ${group.faculty}`);

    });
    console.log('----------------------------------------------------------------------------')
};

displayClassrooms();
displayClassroomsByFaculty('Geology');
const group = {
    className: 'Chemistry',
    students: 17,
    faculty: 'Science'
}
findSuitableClassrooms(group);
console.log('---------------------------------------------')
sortBySeats();
console.log('---------------------------------------------')
sortByName();