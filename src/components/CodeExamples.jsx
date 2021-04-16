<form>
  <input
    onChange={handleChange}
    value={userInfo.fName}
    name="fName"
    placeholder="First Name"
  />
  <input
    onChange={handleChange}
    value={userInfo.lName}
    name="lName"
    placeholder="Last Name"
  />
  <input
    onChange={handleChange}
    value={userInfo.email}
    name="email"
    placeholder="Email"
  />
  <button onClick = {sendUserRSVP} >Submit</button>
</form>
