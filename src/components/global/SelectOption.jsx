import React, { useState, useEffect } from 'react';
import Select from 'react-select'

function SelectOption(props) {
    return (
        <Select {...props} placeholder="Pilih salah satu" isClearable={true} />
    )
}

export default SelectOption
