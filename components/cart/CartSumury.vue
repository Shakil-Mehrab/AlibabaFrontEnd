<template>
  <div>
    <div class="overflow-scroll md:overflow-auto">
      <table class="w-full">
        <thead>
          <tr>
            <th class="border border-customcolor-300">Remove</th>
            <th class="border border-customcolor-300">Image</th>
            <th class="border border-customcolor-300">Name</th>
            <th class="border border-customcolor-300">Size</th>
            <th class="border border-customcolor-300">Quantity</th>
            <th class="border border-customcolor-300">Price (BDT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-customcolor-300 text-center">
              <i class="fas fa-times"></i>
            </td>
            <td class="border border-customcolor-300 text-center">
              <img
                src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                alt=""
                class="w-32"
              />
            </td>
            <td class="border border-customcolor-300 text-center  px-2">
              <h1 class="h-16 overflow-hidden">
                This is about the product in detail
              </h1>
            </td>

            <td class="border border-customcolor-300 text-center">
              <select
                class="focus:outline-none border focus:border-customcolor-300 px-2"
              >
                <option value="">Select One</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">M</option>
              </select>
            </td>
            <td class="border border-customcolor-300 text-center px-2">
              <input
                type="number"
                value="2"
                class="border px-2 focus:outline-none focus:border-customcolor-300 rounded-sm"
              />
            </td>
            <td class="border border-customcolor-300 text-center">
              500
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-64 ml-auto my-2">
      <table class="border-collapse border border-customcolor-300 w-full">
        <tbody>
          <tr>
            <td class="border border-customcolor-300 text-center px-2">
              Sub Total
            </td>
            <td class="border border-customcolor-300 text-center px-2">
              4000
            </td>
          </tr>
          <tr>
            <td class="border border-customcolor-300 text-center px-2">
              Tax
            </td>
            <td class="border border-customcolor-300 text-center px-2">
              4000
            </td>
          </tr>
          <tr>
            <td class="border border-customcolor-300 text-center px-2">
              Grand Total
            </td>
            <td class="border border-customcolor-300 text-center px-2">
              4000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
