function checkUndefined(check) {
  return check !== undefined ? <span>{check.caption}</span> : null
}

export { checkUndefined }
