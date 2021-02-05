function Filter({showGreased, onShowGreased, sortBy, setSortBy}) {
    return(
       <div>
           <label>
               Show Greezed only
               {/* YOU WANT THIS INPUT TO RESPOND TO THE STATE(SYNCHRONIZING WITH THE VALUE) */}
               <input 
               type="checkbox" 
               checked={showGreased} 
               onChange={e => onShowGreased(e.target.checked)}/>
           </label>

           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Sort by name</option>
                <option value="weight">Sort by weight</option>
           </select>
       </div>
    )
}

export default Filter;