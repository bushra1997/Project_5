import React from 'react'
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div>
          <Link exact to="/favorite">
                  My favorite
                </Link>
        </div>
    )
}
