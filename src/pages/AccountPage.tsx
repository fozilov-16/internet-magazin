import { useEffect, useState } from "react"
import { getUserProfile } from "../../api/api";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { Anvil } from "lucide-react";

export default function AccountPage() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userRole: ""
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate()


  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      getUserProfile({ userName })
        .then(user => {
          setForm({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            userRole: user.userRoles?.[0]?.name || "",
          });
        });
    }
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <span className="text-gray-500">Home</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="font-medium">My Account</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <p className="text-lg font-semibold text-gray-900 mb-4">Manage My Account</p>
            <div className="space-y-1 mb-6">
              <div className="px-3 py-2">
                <span className="text-[#DB4444] font-medium">My Profile</span>
              </div>
              <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <span className="text-gray-700">Address Book</span>
              </div>
              <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <span className="text-gray-700">My Payment Options</span>
              </div>
            </div>
            <div className="space-y-1 mb-6">
              <p className="text-gray-900 font-medium px-3 py-2">My Orders</p>
              <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <span className="text-gray-700">My Returns</span>
              </div>
              <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <span className="text-gray-700">My Cancellations</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <span className="text-gray-700">My WishList</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-[#DB4444] mb-4">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-8">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
                      value={form.userName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
                      value={form.email}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Password Changes</h2>
                  <div className="mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current password
                    </label>

                    <input
                      type={showCurrent ? "text" : "password"}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                      value={passwords.currentPassword}
                      onChange={(e) =>
                        setPasswords({ ...passwords, currentPassword: e.target.value })
                      }
                    />

                    <button
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-9 text-gray-400"
                    >
                      {showCurrent
                        ? <VisibilityOffIcon sx={{ fontSize: 18 }} />
                        : <RemoveRedEyeIcon sx={{ fontSize: 18 }} />
                      }
                    </button>
                  </div>
                  <div className="mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New password
                    </label>
                    <input
                      type={showNew ? "text" : "password"}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                      value={passwords.newPassword}
                      onChange={(e) =>
                        setPasswords({ ...passwords, newPassword: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-9 text-gray-400"
                    >
                      {showNew
                        ? <VisibilityOffIcon sx={{ fontSize: 18 }} />
                        : <RemoveRedEyeIcon sx={{ fontSize: 18 }} />
                      }
                    </button>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm new password
                    </label>
                    <input
                      type={showConfirm ? "text" : "password"}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                      value={passwords.confirmPassword}
                      onChange={(e) =>
                        setPasswords({ ...passwords, confirmPassword: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-9 text-gray-400"
                    >
                      {showConfirm
                        ? <VisibilityOffIcon sx={{ fontSize: 18 }} />
                        : <RemoveRedEyeIcon sx={{ fontSize: 18 }} />
                      }
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
                    value={form.lastName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
                    placeholder="+(992) ** *** ** **"
                    value={form.phoneNumber}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
              <button className="px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
              onClick={() => navigate("/home")}
              >
                Cancel
              </button>
              <button className="px-5 py-2 bg-[#DB4444] border border-transparent rounded-md text-sm font-medium text-white cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
