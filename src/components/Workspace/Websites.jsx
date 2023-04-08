import {useEffect, useState} from 'react';

export default function React() {
  const [websites, setWebsites] = useState([]);
  const getWebsites = async () => {
    let res = await fetch("/api/websites");
    let resJson = await res.json();
    setWebsites(resJson);
  };

  useEffect(() => {
    getWebsites();
  }, []);

  return (
    
    <>
      {/* Page Content */}
      <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Heading */}
          <div className="bg-gray-50 dark:bg-gray-800/50">
            <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
              <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
                <div className="grow">
                  <h1 className="text-xl font-bold mb-1">
                    Websites
                  </h1>
                  <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
                    Welcome <a href="#" className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">John</a>, everything seems great!
                  </h2>
                </div>
                <div className="flex-none flex items-center justify-center sm:justify-end space-x-2 py-3 rounded sm:bg-transparent px-2 sm:px-0">
                  <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                    <svg className="hi-mini hi-plus inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" /></svg>
                    <span>New Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* END Page Heading */}

          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            {/*

            ADD YOUR MAIN CONTENT BELOW

            */}

             {/* Responsive Table Container */}
      <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
        {/* Bordered Table */}
        <table className="min-w-full text-sm align-middle whitespace-nowrap">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Name
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Email
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Plan
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Actions
              </th>
            </tr>
          </thead>
          {/* END Table Header */}

          {/* Table Body */}
          <tbody>
          {websites.map(el => {
            return (<tr key={el.id} className="border-b border-gray-200">
              <td className="p-3">
                <p className="font-medium">
                  {el.domain_name}
                </p>
              </td>
              <td className="p-3 text-gray-500">
                n.hart@example.com
              </td>
              <td className="p-3 text-center">
                <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-700 bg-emerald-200">Agency</div>
              </td>
              <td className="p-3 text-center">
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg className="hi-solid hi-pencil inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                  <span>Edit</span>
                </button>
              </td>
            </tr>);
          })}


          </tbody>
          {/* END Table Body */}
        </table>
        {/* END Bordered Table */}
      </div>
      {/* END Responsive Table Container */}
            {/*
            
            ADD YOUR MAIN CONTENT ABOVE
                  
            */}
          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
    </>
  );
}