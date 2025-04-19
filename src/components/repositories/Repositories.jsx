import React, { use } from 'react';
import Repository from '../repository/Repository';

const Repositories = ({ repositoriesPromise }) => {
    const repositories = use(repositoriesPromise)
    return (
        <div className='sm:w-7/12 container mx-auto text-center mt-6 px-2'>
            <h2 className='text-2xl font-bold'>Total Repositories {repositories.length}</h2>
            <div className='grid sm:grid-cols-2 gap-3 mt-4'>
                {
                    repositories.map(repository => <Repository key={repository.repo} repository={repository}></Repository>)
                }
            </div>
            <hr className='border-2 border-gray-500 mt-8' />
        </div>
    );
};

export default Repositories;