import React from 'react';

const Information = () => {
  return (
    <div className="bg-slate-300 container max-w-full px-8 py-6 rounded-lg shadow-lg mx-auto">
      <h1 className="text-3xl text-gray-800 font-extrabold font-serif mb-6">Admission Process</h1>
      <div className="text-lg text-gray-700 mb-6">
        <p>
          We're delighted that you're considering Prabhuram Gurukul School for your child's education. Prabhuram Gurukul aims to create a nurturing and holistic educational environment that promotes intellectual growth, cultural appreciation, personal development, and overall well-being of students, preparing them to become responsible, confident, and capable individuals.
        </p>
        <p>
          To begin the admission process, please fill out the form below:
        </p>
      </div>

      <form action="/action_page.php" className="bg-sky-950 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-white font-serif mb-4">Admission Form</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="name" className="block text-white text-lg text-left font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="block text-white text-lg text-left font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="phone" className="block text-white text-lg text-left font-medium mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="bloodgroup" className="block text-white text-lg text-left font-medium mb-2">Blood Group</label>
            <input type="text" id="bloodgroup" name="bloodgroup" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="class" className="block text-white text-lg text-left font-medium mb-2">Class</label>
            <select id="class" name="class" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Select Class</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="transport" className="block text-white text-lg text-left font-medium mb-2">Transport Required</label>
            <select id="transport" name="transport" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Select</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="age" className="block text-white text-lg text-left font-medium mb-2">Age</label>
            <input type="text" id="age" name="age" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="adress" className="block text-white text-lg text-left font-medium mb-2">Address</label>
            <textarea id="adress" name="adress" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <div className="col-span-2">
            <input type="checkbox" id="terms" name="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-lg font-medium text-white">I agree to the terms and conditions</label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
      </form>

      <div className="bg-sky-100 rounded-lg text-left shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-black font-serif mb-4">Eligibility</h2>
        <p className="text-black mb-4">
          Children Age Group 5 years to 7 years
        </p>
      </div>
      
      <div className="bg-sky-100 rounded-lg text-left shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-black font-serif mb-4">Documents for Submission</h2>
        <ul className="list-disc pl-6 text-black">
          <li>Filled up registration form</li>
          <li>Copy of birth certificate</li>
          <li>Copy of Aadhar card</li>
          <li>Transfer certificate, progress sheet of the last examination taken</li>
          <li>Official copy of reports/marks card from previous school</li>
          <li>Eight passport size photographs</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
