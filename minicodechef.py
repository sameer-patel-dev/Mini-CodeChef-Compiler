import os
import filecmp

def compile_code(file, language):
    if language == 'java':
        class_file = file[:-4]+"class"

    if (os.path.isfile(class_file)):
        os.remove(class_file)
    
    if (os.path.isfile(file)):

        if language == 'java':
            os.system('javac '+file)
        
        if (os.path.isfile(class_file)):
            return 200
        
        else:
            return 400
    
    else:
        return 404


def run_code(file, input, timeout, language):
    if language == 'java':
        cmd = 'java '+file

    if language == 'python':
        cmd = 'python '+file+'.py'
    
    r = os.system('timeout '+timeout+' & '+cmd+' < '+input+' > out.txt')

    if r==0:
        return 200
    
    elif r==31744:
        os.remove('out.txt')
        return 408
    
    else:
        os.remove('out.txt')
        return 400


def match_code(output):
    if os.path.isfile('out.txt') and os.path.isfile(output):
        b = filecmp.cmp('out.txt', output)
        return b
    
    else:
        return 404


file = input("Enter the File name including its extension (Main.java for Java) and (Main.py for Python)\n")
language = input("Enter java for Java Lanuage or python for Python language\n")

testin = 'testin.txt'
testout = 'testout.txt'
timeout = '2'
http_codes = { 200:'Compilation Successfull', 404:'File Not Found', 400:'Error', 408:'Timeout'}



if language == 'java':
	print(http_codes[compile_code(file, language)])
else:
	print(http_codes[run_code('Main', testin, timeout, language)])




if match_code(testout) is True:
	print("Your Code is Accepted")
else:
	print("Your Code is not Accepted")