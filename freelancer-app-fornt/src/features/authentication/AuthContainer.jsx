import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate, useLocation } from "react-router-dom";

function AuthContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const isProfileComplete = user.name && user.email && user.role;

      if (isProfileComplete) {
        if (user.role === "OWNER") navigate("/owner", { replace: true });
        else if (user.role === "FREELANCER")
          navigate("/freelancer", { replace: true });
        else if (user.role === "ADMIN") navigate("/admin", { replace: true });
      }
    }
  }, [user, navigate, location.pathname]);

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      console.log(message);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            onReSendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => {
              setStep((s) => s - 1);
            }}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
