import prisma from '../connection';

export const getPersons = async () => {
  const persons = await prisma.person.findMany();

  return persons;
};

export const getPersonById = async (id) => {
  const person = await prisma.person.findUnique({
    where: {
      id,
    },
  });

  return person;
};

export const createPerson = async (personInfo) => {
  const person = await prisma.person.create({
    data: personInfo,
  });

  return person;
};

export const updatePerson = async (id, personInfo) => {
  const person = await prisma.person.update({
    where: {
      id,
    },
    data: personInfo,
  });
  return person;
};

export const deletePerson = async (id) => {
  const person = await prisma.person.delete({
    where: {
      id,
    },
  });

  return person;
};


