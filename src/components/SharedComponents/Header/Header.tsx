import React, { useContext } from "react";
import "./Header.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { Navbar } from "..";
import { UpDownArrow } from "../SVGIcons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { OrganizationDropdown, ProfileDropdown } from "./components";
import { ActionContext, StateContext } from "../../../hooks";
import Skeleton from "react-loading-skeleton";
import { IActionModel, IStateModel } from "../../../model/hooks.model";
import IHeaderProps from "./model";

const Header: React.FC<IHeaderProps> = ({ parent }) => {
  const history = useHistory();
  const params = useParams<any>();
  const {
    user,
    selectedOrg,
    userLoading,
    selectedProject,
    orgLoading,
    projectLoading,
  } = useContext<IStateModel>(StateContext);
  const { fetchUser } = useContext<IActionModel>(ActionContext);

  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);
  const [showOrgDropdown, setShowOrgDropdown] = React.useState(false);
  return (
    <header className="Header">
      <div className="header-container">
        <div className="navbar-container">
          <div className="logo-container">
            <div className="app-logo-container">
              <Link to="/" onClick={(e) => fetchUser(selectedOrg?._id)}>
                <img
                  src={require("../../../assets/png/logo-white.png")}
                  alt="logo"
                  className="logo-image"
                />
                <span className="logo-badge">Alpha</span>
              </Link>
            </div>
            <div className="teams-container">
              {!orgLoading ? (
                <img
                  src={
                    selectedOrg?.profile.image
                      ? selectedOrg.profile.image
                      : require("../../../assets/png/default_icon.png")
                  }
                  alt="org"
                  className="team-avatar"
                  onClick={(e) => history.push("/dashboard")}
                ></img>
              ) : (
                <Skeleton circle={true} height={42} width={42} duration={2} />
              )}
              <h4 className="team-name" onClick={(e) => history.push("/dashboard")}>
                {!orgLoading ? (
                  selectedOrg?.profile.name
                ) : (
                  <Skeleton width={60} duration={2} />
                )}
              </h4>
              <div
                className={`team-up-down-arrow ${
                  showOrgDropdown
                    ? "selected-team-arrow"
                    : orgLoading
                    ? "disabled-team-arrow"
                    : ""
                }`}
                onClick={(e) => (!orgLoading ? setShowOrgDropdown(true) : null)}
              >
                <UpDownArrow />
              </div>
            </div>
            {parent === "sites" && (
              <div className="teams-container">
                <h4
                  className={`team-name ${!projectLoading ? "project-name" : ""}`}
                  onClick={(e) =>
                    history.push(
                      `/org/${params.orgid}/sites/${params.slug1}/overview`,
                    )
                  }
                >
                  {!projectLoading ? (
                    selectedProject?.name
                  ) : (
                    <Skeleton width={140} duration={2} />
                  )}
                </h4>
              </div>
            )}
          </div>
          <div className="user-profile-container">
            {/* <div className="menu-container">
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            </div> */}
            <div
              className="profile-container"
              onClick={(e) => (!userLoading ? setShowProfileDropdown(true) : null)}
            >
              {!userLoading ? (
                <img
                  src={user?.argo_profile.avatar}
                  alt="address-blockie"
                  className={`user-profile-blockie-icon ${
                    showProfileDropdown ? "selected-profile" : ""
                  }`}
                />
              ) : (
                <Skeleton circle={true} height={42} width={42} duration={2} />
              )}
            </div>
          </div>
          {showProfileDropdown && (
            <ProfileDropdown setShowDropdown={setShowProfileDropdown} />
          )}
          {showOrgDropdown && (
            <OrganizationDropdown setShowDropdown={setShowOrgDropdown} />
          )}
        </div>
        <Navbar parent={parent} />
      </div>
    </header>
  );
};

export default Header;
