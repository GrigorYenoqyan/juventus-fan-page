import React from "react";

import loading from "../../assets/images/loading.svg";

import "./Loading.css"

const Loading = () => (
    <div className="loading">
        <img src={loading} alt="" />
    </div>
)

export default Loading;