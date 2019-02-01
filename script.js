const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"


// CALCULATE TOTAL RAINFALL
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
const totalRainfall = monthlyRainfall.reduce((accumulator, nextNumber) => accumulator += nextNumber, 0)
console.log(totalRainfall)

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
const sentence = words.reduce((currentWord, nextWord) => `${currentWord} ${nextWord}`, "")
console.log(sentence)

// // CALCULATE TOTAL COST USING REDUCE()

// businesses.forEach(business => {
// let totalOrders = business.orders.reduce((currentTotal, nextValue) => currentTotal += nextValue, 0)
// totalOrders = totalOrders.toFixed(2)
// console.log(totalOrders)    

// outEl.innerHTML += `
// <h2>
//     ${business.companyName}
//     ($${totalOrders})
// </h2>
// <section>
//     ${business.addressFullStreet}
// </section>
// <section>
//     ${business.addressCity},
//     ${business.addressStateCode}
//     ${business.addressZipCode}
// </section>
// `;
// outEl.innerHTML += "<hr/>";
// });



// //SEARCH FUNCTION FOR AGENTS

// document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
//     if (keyPressEvent.charCode === 13) {
//         const foundBusiness = businesses.find(business => {
//             let typedSearch = keyPressEvent.target.value.toUpperCase()
//             let upperFirstName = business.purchasingAgent.nameFirst.toUpperCase()
//             let upperLastName = business.purchasingAgent.nameLast.toUpperCase()
//             if (upperFirstName.includes(typedSearch) || upperLastName.includes(typedSearch))
//             return typedSearch
//         }
//         )
//         outEl.innerHTML =
//             `
//         <h2>${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}</h2>
//         <section>${foundBusiness.addressFullStreet}</section>
//         <section>
//         ${foundBusiness.addressCity},
//         ${foundBusiness.addressStateCode}
//         ${foundBusiness.addressZipCode}
//         </section>
//         `
//     }
// })


// //FILTER BY STATE

// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
//     return inNewYork
// })

// const manufacturingBusinesses = businesses.filter(business => {
//     let isManufacturer = false

//     if (business.companyIndustry === "Manufacturing") {
//         isManufacturer = true
//     }
//     return isManufacturer
// })


// //FILTER BY BUSINESS TYPE
// manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//     ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]} ${business.addressZipCode} 
//     </section>
//     `
//     outEl.innerHTML += "<hr/>"
// })

// outEl.innerHTML += `<h1>Purchasing Agents</h1>`

// const agents = businesses.map(business => {
//    return agent = {
//        "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//        "company": business.companyName,
//        "phoneNumber": business.phoneWork
//     }
//     })
// console.table(agent)

// agents.forEach(agent => {
//     outEl.innerHTML += `
//     <h2>${agent.fullName}</h2>
//     <h4>${agent.company}</h4>
//     <h4>${agent.phoneNumber}</h4>
//     `
//     outEl.innerHTML += "<hr/>"
// })