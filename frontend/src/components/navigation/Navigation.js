import React, { useState } from "react";
import "./navigation.css";
import NavBar from "./NavbarPage";

import { Route, Link, useHistory } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="Nav">
        <div className="header">
          <Link className="logo-link" exact to="/home">
            Ocassions App
          </Link>
        </div>
        <div className="header1">
          <NavBar />
        </div>
      </div>
        <div class="container">
       <Link class="btn btn-1" to="/weddings"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Weddings</Link>
       <Link class="btn btn-1" to="/birthDayParty"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>BD Party</Link>
      <Link class="btn btn-1"  to="/funerals"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Funerals </Link>
      <Link class="btn btn-1"  to="/dinnerParty"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Dinner Party</Link>
      <Link class="btn btn-1"  to="/meeting"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Meeting</Link>
        </div>
    </>
  );
};

export default Navigation;
// birthDayParty
// <div className="Nav">
//   <div className="header"><Link className="logo-link" exact to="/home">Ocassions App</Link></div>
//   <div className="header1"><NavBar/></div>
// </div>
// <div className="sections">
//   </div>
