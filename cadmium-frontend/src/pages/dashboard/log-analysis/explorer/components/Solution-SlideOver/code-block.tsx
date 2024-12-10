import SyntaxHighlighter from 'react-syntax-highlighter';
import atelierDuneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
const CodeBlock = ({ codeString }: { codeString: string }) => {
    //     const codeString = `
    // from rest_framework import status
    // from rest_framework.response import Response
    // from rest_framework.views import APIView
    // from django.db.models import Q
    // from ...models.payroll_file_data import PayrollFileData
    // from ...serializers.admin.view_payroll_report import PayrollFileDataSerializer


    // class AdminPayrollByEmployeeAPIView(APIView):
    //     """
    //     API view for admins to display payroll data for a specific employee
    //     """

    //     def get(self, request):
    //         # Get employee_id from query parameters
    //         employee_id = request.query_params.get("employee_id", None)

    //         # If no employee_id is provided, return a bad request response
    //         if not employee_id:
    //             return Response(
    //                 {"error": "employee_id query parameter is required"},
    //                 status=status.HTTP_400_BAD_REQUEST,
    //             )

    //         # Fetch payroll file data for the given employee_id
    //         payroll_file_data = PayrollFileData.objects.filter(payroll_entry__employee_id=employee_id)

    //         # If no payroll data is found, return a not found response
    //         if not payroll_file_data.exists():
    //             return Response(
    //                 {"error": f"No payroll data found for employee_id: {employee_id}"},
    //                 status=status.HTTP_404_NOT_FOUND,
    //             )

    //         # Serialize the payroll data
    //         serializer = PayrollFileDataSerializer(payroll_file_data, many=True)

    //         # Return the serialized payroll data
    //         return Response(serializer.data, status=status.HTTP_200_OK)
    // `
    return (
        <SyntaxHighlighter
            language="python"
            style={atelierDuneDark}
            wrapLongLines
            // showLineNumbers
            // showInlineLineNumbers
            startingLineNumber={5}
            customStyle={{ margin: 0, padding: 10, background: "none", borderRadius: 5, fontSize: 12, backgroundColor: "#08162a" }}
        >
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock